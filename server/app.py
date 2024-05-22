import chromadb
import logging
import ollama
import hashlib
import sys
import os

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')
client = chromadb.Client()
mem_client = chromadb.PersistentClient('./vector_db/data')
collection = client.get_or_create_collection(name="docs")
memory_collection = mem_client.get_or_create_collection(name="memory")

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/api/users', methods=['GET'])
def users():
    total_pages = 1
    result_json = ['this', 'is', 'a', 'test']
    return jsonify({"users": result_json})

@app.route('/api/clear_memory', methods=['DELETE'])
def cls_memory():
    try:
        mem_client.delete_collection(name="memory")
        logging.info('Memory cleared')
        return jsonify({'response': 'memory cleared'})
    except Exception as e:
        logging.error(f"Error clearing collection: {e}")
        return jsonify({'response': f'Error clearing collection {e}'}), 500

@app.route('/api/session_memory', methods=['POST'])
def memory():
    memory_collection = mem_client.get_or_create_collection(name="memory")
    memory_input = request.json.get('memory')
    logging.debug(f"Received session memory: {memory_input}")

    try:
        response = ollama.embeddings(prompt=memory_input, model="nomic-embed-text")
        memory_embedding = response["embedding"]
        logging.debug(f'Memory embedding: {memory_embedding}')
    except Exception as e:
        logging.error(f"Error generating embedding: {e}")
        return jsonify({'response': 'Error generating embedding'}), 500

    # Hash the memory input to generate an ID
    memory_id = hashlib.sha256(memory_input.encode('utf-8')).hexdigest()
    logging.debug(f'Generated memory ID: {memory_id}')

    try:
        memory = memory_collection.add(
            ids=[memory_id],
            embeddings=[memory_embedding],
            documents=[memory_input],
            metadatas=[]
        )
        logging.debug(f'Added memory: {memory}')
        relevant_memory = memory['documents'][0][0]
        rag = f'Captured this memory: {relevant_memory}.'
    except Exception as e:
        logging.error(f"Error saving memory: {e}")
        return jsonify({'response': 'Error saving memory'}), 500

    logging.info(f"Memory saved: {relevant_memory}")
    return jsonify({'response': rag})

# @app.route('/api/completion', methods=['POST'])
# def completion():
#     question = request.json.get('question')
#     mem_embeddings = ollama.embeddings(prompt=question, model="nomic-embed-text")["embedding"]
#     memory_id = hashlib.sha256(question.encode('utf-8')).hexdigest()
#     logging.debug(f'Generated memory ID: {memory_id}')
#     memory_collection = mem_client.get_or_create_collection(name="memory")

#     try:
#         # get mem first

#         data = memory_collection.query(query_embeddings=[mem_embeddings], n_results=1)['documents'][0][0]

#     except:
#         data = 'No memory found'
#         logging.debug('No Memory Found')

#     try:
#         memory = memory_collection.add(
#             ids=[memory_id],
#             embeddings=[mem_embeddings],
#             documents=[question],
#             metadatas=[{'memory_id':1}]
#         )
        
        
        
#     except Exception as e:
#         logging.error(f"Error retrieving memory data: {e}")
#         data = ''
#         return jsonify({'response': str(data)})
    
#     return jsonify({'response': str(data)})

# if __name__ == '__main__':
#     app.run(debug=True, port=8080)


@app.route('/api/completion', methods=['POST'])
def completion():
    user_input = request.json.get('question')
    logging.debug(f"Received user input: {user_input}")

    # see if there are any session memories #
    try:
        memory_item = '' #completion_memory(user_input)
        logging.debug(f"Completion memory---: {memory_item }")
    except:
        logging.info('No memories found')

    try:
        response = ollama.embeddings(prompt=user_input, model="nomic-embed-text")
        user_embedding = response["embedding"]
    except Exception as e:
        logging.error(f"Error generating embedding: {e}")
        return jsonify({'response': 'Error generating embedding'}), 500

    try:
        results = collection.query(query_embeddings=[user_embedding], n_results=1)['documents'][0][0]
        relevant_document = results['documents'][0][0]
        rag = f'Using this data: {relevant_document}.'
    except Exception as e:
        logging.error(f"Error retrieving document: {e}")
        if len(memory_item) > 1:
            rag = f'Using this data: {memory_item}.'
        else:
            rag = ''

    try:
        output = ollama.generate(
            model="llama3",
            prompt=f"{rag} Respond to this prompt: {user_input}"
        )
        logging.info(f"Generated response: {output['response']}")
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return jsonify({'response': 'Error generating response'}), 500

    return jsonify({'response': output['response']})

if __name__ == '__main__':
    app.run(debug=True, port=8080)
    