import { useState } from 'react';
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiServer, FiCloud, FiDatabase, FiBox, FiCpu, FiLock, FiCode } from 'react-icons/fi';

interface Integration {
    name: string;
    description: string;
    icon: JSX.Element;
    credentials: boolean;
}

const integrations: Integration[] = [
    {
        name: "Terraform",
        description: "Manage your infrastructure as code with Terraform.",
        icon: <FiServer size={40} />,
        credentials: false,
    },
    {
        name: "Azure CLI",
        description: "Interact with Azure services using Azure CLI.",
        icon: <FiCloud size={40} />,
        credentials: true,
    },
    {
        name: "Chroma DB",
        description: "A vector database for your AI models.",
        icon: <FiBox size={40} />,
        credentials: false,
    },
    {
        name: "Snowflake",
        description: "A cloud data platform to mobilize your data.",
        icon: <FiDatabase size={40} />,
        credentials: true,
    },
    {
        name: "Ollama",
        description: "Model inference and deployment made easy.",
        icon: <FiCpu size={40} />,
        credentials: false,
    },
    {
        name: "Azure DevOps",
        description: "Manage your DevOps pipelines and repositories.",
        icon: <FiCode size={40} />,
        credentials: true,
    },
];

interface Credentials {
    [key: string]: string;
}

export default function Integrations() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentIntegration, setCurrentIntegration] = useState<Integration | null>(null);

    const handleCardClick = (integration: Integration) => {
        if (integration.credentials) {
            setCurrentIntegration(integration);
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setCurrentIntegration(null);
    };

    const encryptData = async (data: string, key: CryptoKey): Promise<string> => {
        const encoded = new TextEncoder().encode(data);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv },
            key,
            encoded
        );
        return JSON.stringify({
            iv: Array.from(iv),
            data: Array.from(new Uint8Array(encrypted)),
        });
    };

    const handleSaveCredentials = async (credentials: Credentials) => {
        try {
            const password = "your-strong-password";
            const keyMaterial = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(password),
                { name: "PBKDF2" },
                false,
                ["deriveKey"]
            );

            const key = await crypto.subtle.deriveKey(
                {
                    name: "PBKDF2",
                    salt: new TextEncoder().encode("your-salt"),
                    iterations: 100000,
                    hash: "SHA-256"
                },
                keyMaterial,
                { name: "AES-GCM", length: 256 },
                false,
                ["encrypt"]
            );

            const encryptedCredentials = await encryptData(JSON.stringify(credentials), key);

            const response = await fetch('/api/save-credentials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: encryptedCredentials })
            });

            if (!response.ok) {
                throw new Error('Failed to save credentials');
            }

            console.log('Credentials saved successfully');
        } catch (error) {
            console.error('Error saving credentials:', error);
        } finally {
            closePopup();
        }
    };

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Integration Details</PageHeaderHeading>
            </PageHeader>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {integrations.map((integration, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <Card onClick={() => handleCardClick(integration)} style={{ cursor: 'pointer' }}>
                            <CardHeader>
                                {integration.icon}
                                <CardTitle>{integration.name}</CardTitle>
                                <CardDescription>{integration.description}</CardDescription>
                            </CardHeader>
                            {integration.credentials && (
                                <FiLock style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }} />
                            )}
                        </Card>
                    </div>
                ))}
            </div>
            {showPopup && currentIntegration && (
                <div style={popupStyle}>
                    <div style={popupContentStyle}>
                        <CredentialForm
                            integrationName={currentIntegration.name}
                            onSave={handleSaveCredentials}
                            onClose={closePopup}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

interface CredentialFormProps {
    integrationName: string;
    onSave: (credentials: Credentials) => void;
    onClose: () => void;
}

function CredentialForm({ integrationName, onSave, onClose }: CredentialFormProps) {
    const [credentials, setCredentials] = useState<Credentials>({

        ...(integrationName === 'Snowflake' && {
            username: '',
            password: '',
            account: '',
            database: '',
            schema: '',
            warehouse: '',
            role: ''
        }),
        ...(integrationName === "Azure CLI" && {
            username: '',
            password: '',
        }),
        ...(integrationName === 'Azure DevOps' && {
            email: '',
            patToken: '',
            repoUrl: '',
            branch:''
        })
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(credentials);
    };

    return (
        <Card style={{ width: '350px' }}>
            <CardHeader>
                <CardTitle>Add Credentials</CardTitle>
                <CardDescription>Enter your credentials for {integrationName}.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        {Object.keys(credentials).map((key) => (
                            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                                <Input id={key} type={key === 'password' || key === 'patToken' ? 'password' : 'text'} placeholder={`Enter your ${key}`} value={credentials[key]} onChange={handleChange} />
                            </div>
                        ))}
                    </div>
                    <CardFooter style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}

const popupStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const popupContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
};
