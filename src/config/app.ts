interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Terraforge",
    github: {
        title: "Terraforge",
        url: "https://github.com/Data-Alchemy/Terraforge.git",
    },
    author: {
        name: "Sebastian Hansen",
        url: "https://github.com/Data-Alchemy",
    }
}