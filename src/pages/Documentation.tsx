import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sample() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Terraforge Dashboard Documentation</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Features</CardTitle>
                    <CardDescription>
                        Terraforge Dashboard offers the following features:
                    </CardDescription>
                </CardHeader>
                <div className="p-6">
                    <h2 className="text-xl font-semibold">Azure Resource Management:</h2>
                    <ul className="list-disc list-inside">
                        <li>Login to Azure CLI.</li>
                        <li>Collect Azure resource data from your specified Azure subscription.</li>
                        <li>Filter the resource data using a user-friendly interface.</li>
                        <li>Visualize resource creation over time in an interactive chart.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4">Deployment Definitions:</h2>
                    <ul className="list-disc list-inside">
                        <li>Retrieve Azure resource metadata and documentation.</li>
                        <li>Access and display documentation for Azure resource types.</li>
                        <li>Use Azure TERRAFORGE  to generate documentation for Azure resources.</li>
                        <li>Create deployment definitions for resources.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4">Terraform Deployment:</h2>
                    <ul className="list-disc list-inside">
                        <li>Generate HashiCorp Configuration Language (HCL) code for Azure resources.</li>
                        <li>Deploy Azure resources using Terraform.</li>
                        <li>Monitor the progress of resource deployment.</li>
                    </ul>
                </div>
            </Card>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Customization</CardTitle>
                    <CardDescription>
                        You can customize the tool according to your needs by modifying the following files and settings:
                    </CardDescription>
                </CardHeader>
                <div className="p-6">
                    <h2 className="text-xl font-semibold">Prompt Customization:</h2>
                    <p>All non-password configurations are managed from the <code className="bg-gray-100 p-1 rounded">./App_Configs</code> folder:</p>
                    <table className="w-full mt-2 border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">File Name</th>
                                <th className="border px-4 py-2">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">default_tags.json</td>
                                <td className="border px-4 py-2">Contains default tags for resources. These tags can be applied as initial labels or categories when creating resources.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">naming_config.txt</td>
                                <td className="border px-4 py-2">Contains configuration settings or guidelines related to naming conventions. This file includes rules and recommendations for resource names.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">qa_testing.txt</td>
                                <td className="border px-4 py-2">This file contains instructions for quality assurance (QA) testing.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Role_Configuration.json</td>
                                <td className="border px-4 py-2">Stores role configurations of Agents. These configurations define which actions each role can perform and what their objective is. Each role is executed iteratively and will execute in the order they are created.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-semibold mt-4">Azure Credentials:</h2>
                    <p>Update the Azure credentials in the <code className="bg-gray-100 p-1 rounded">az.env</code> file with your Azure service principal details.</p>

                    <h2 className="text-xl font-semibold mt-4">Azure TERRAFORGE  Configuration:</h2>
                    <p>Set your Azure TERRAFORGE  key, endpoint, and other related settings in the <code className="bg-gray-100 p-1 rounded">az.env</code> file.</p>

                    <h2 className="text-xl font-semibold mt-4">Additional Libraries:</h2>
                    <p>If you need to add additional Python libraries, update the <code className="bg-gray-100 p-1 rounded">pyproject.toml</code> file and use Poetry to manage dependencies.</p>

                    <h2 className="text-xl font-semibold mt-4">Tool Configuration:</h2>
                    <p>You can modify the tool's behavior by editing the code in the <code className="bg-gray-100 p-1 rounded">forge_app.py</code> file. The script defines various functions and configurations for the tool's operation.</p>
                </div>
            </Card>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Additional Functionality</CardTitle>
                    <CardDescription>
                        This app also includes the following utilities for ease of use:
                    </CardDescription>
                </CardHeader>
                <div className="p-6">
                    <h2 className="text-xl font-semibold">./Config.py:</h2>
                    <ul className="list-disc list-inside">
                        <li>Install Azure CLI</li>
                        <li>Install Terraform CLI</li>
                        <li>Git Commit and push</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4">./env/:</h2>
                    <p>Retrieving credentials from Azure Key Vault and storing them in an env file for application:</p>
                    <ul className="list-disc list-inside">
                        <li>Mac/Linux: <code className="bg-gray-100 p-1 rounded">./env/get_env.sh</code></li>
                        <li>Windows: <code className="bg-gray-100 p-1 rounded">env/get_env.ps1</code></li>
                    </ul>
                </div>
            </Card>
        </>
    )
}
