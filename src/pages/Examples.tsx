import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Examples() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Using Terraforge: Example Prompts</PageHeaderHeading>
            </PageHeader>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Azure Resource Management</CardTitle>
                    <CardDescription>
                        Manage and visualize your Azure resources efficiently.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Example Prompts:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>Prompt:</strong> "Login to Azure CLI and collect resource data from my subscription."
                            <br />
                            <strong>Response:</strong> The tool will log in to Azure CLI using the provided credentials and collect resource data from the specified subscription.
                        </li>
                        <li className="mt-4">
                            <strong>Prompt:</strong> "Filter resource data to show only virtual machines."
                            <br />
                            <strong>Response:</strong> The tool will filter the collected resource data to display only virtual machines.
                        </li>
                        <li className="mt-4">
                            <strong>Prompt:</strong> "Visualize resource creation over time in a chart."
                            <br />
                            <strong>Response:</strong> An interactive chart will be generated, showing the creation dates of resources over time.
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Deployment Definitions</CardTitle>
                    <CardDescription>
                        Retrieve metadata, generate documentation, and create deployment definitions for Azure resources.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Example Prompts:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>Prompt:</strong> "Retrieve metadata for a specific Azure resource."
                            <br />
                            <strong>Response:</strong> The tool will fetch and display metadata for the specified Azure resource.
                        </li>
                        <li className="mt-4">
                            <strong>Prompt:</strong> "Generate documentation for an Azure resource ."
                            <br />
                            <strong>Response:</strong> The tool will to generate comprehensive documentation for the specified Azure resource.
                        </li>
                        <li className="mt-4">
                            <strong>Prompt:</strong> "Create a deployment definition for a new storage account."
                            <br />
                            <strong>Response:</strong> The tool will generate a deployment definition for a new Azure storage account, including all necessary configurations.
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Terraform Deployment</CardTitle>
                    <CardDescription>
                        Automate the deployment of Azure resources using Terraform.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Example Prompts:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>Prompt:</strong> "Generate HCL code for deploying a virtual network."
                            <br />
                            <strong>Response:</strong> The tool will generate the necessary HashiCorp Configuration Language (HCL) code for deploying a virtual network in Azure.
                        </li>
                        <li className="mt-4">
                            <strong>Prompt:</strong> "Deploy resources using the generated Terraform code."
                            <br />
                            <strong>Response:</strong> The tool will execute the generated Terraform code to deploy the specified resources in Azure.
                        </li>
                        <li className="mt-4">
                            <strong>Prompt:</strong> "Monitor the progress of the resource deployment."
                            <br />
                            <strong>Response:</strong> The tool will provide real-time updates on the progress of the resource deployment.
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </>
    );
}
