import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CodeViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>View code</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your current
            prompt and settings into your application.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="rounded-md bg-black p-6">
            <pre>
              <code className="grid gap-1 text-sm text-muted-foreground [&_span]:h-4">
                <span>
                  <span className="text-sky-300">import</span> os
                </span>
                <span>
                  <span className="text-sky-300">import</span> ollama
                </span>
                <span />
                <span>
                  tf.api_key = os.getenv(
                  <span className="text-green-300">
                    &quot;TERRAFORGE_API_KEY&quot;
                  </span>
                  )
                </span>
                <span />
                <span>response = ollama.chat(</span>
                <span>
                  {" "}
                  model=
                  <span className="text-green-300">&quot;llama3&quot;</span>,
                </span>
                <span>
                messages=
                <span className="text-amber-300">
                  [
                  {"{"}
                    'role': 'user',
                    'content': 'Why is the sky blue?',
                  {"}"}
                  ]
                </span>
                ,
              </span>
                <span>
                  {" "}
                  temperature=<span className="text-amber-300">0.9</span>,
                </span>
                <span>)</span>
              </code>
            </pre>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Your API Key can be found here. You should use environment
              variables or a secret management tool to expose your key to your
              applications.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
