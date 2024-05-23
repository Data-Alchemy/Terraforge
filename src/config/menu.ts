import { Icons } from "@/components/icons"

interface NavItem {
    title: string
    to?: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
}

interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export const mainMenu: NavItemWithChildren[] = [
    {
        title: 'Dashboard',
        to: '',
    },
    {
        title: 'FAQ',
        items: [
            {
                title: 'Documentation',
                to: '/documentation',
            },
            {
                title: 'Examples',
                to: '/examples',
            },
        ]
    },
    {
        title: 'Integrations',
        to: 'integrations',
    },
    {
        title: 'DataCleanRoom',
        to: 'DataCleanRoom',
    },
]

export const sideMenu: NavItemWithChildren[] = []
