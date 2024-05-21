import React from 'react';
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import "./dashboard.css"; // Make sure to import your CSS file
import PlaygroundPage from "@/components/playground/page"

export function SwitchCache() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="useCache" />
      <Label htmlFor="use-cache">Use Cache</Label>
    </div>
  );
}

export function EnvironmentBadge() {
  const isLocalhost = import.meta.env.DEV;
  const badgeText = isLocalhost ? "Localhost" : "Production";

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.25em 0.5em',
        borderRadius: '0.25em',
        backgroundColor: isLocalhost ? 'green' : 'blue',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {badgeText}
    </span>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="top-card">
        <Card>
          <br />
          <div style={{ display: 'grid', justifyContent: 'end', paddingRight: '20px' }}>
            <div>
              <EnvironmentBadge />
            </div>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            
            <SwitchCache />
          </div>
          <CardHeader>
            <CardTitle>Terraforge</CardTitle>
            <CardDescription>Terraforge React App for deploying infrastructure</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="App">
        <PlaygroundPage />
      </div>
    </>
  );
}
