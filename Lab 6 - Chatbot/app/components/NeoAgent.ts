export const NeoAgents = {
    Stocks: {
        key: "Stocks",
        title: "Stocks",
        icon: "/stock-market.png",
        description: "explore equities trading",
        dataModelPath: "/stock-market.png",
        databaseInfo: {
            databaseName: process.env.NEXT_PULIC_EQUITIES_DATABASE,
            hostUrl: process.env.NEXT_PULIC_EQUITIES_HOST,
            username: process.env.NEXT_PULIC_EQUITIES_UNAME,
            password: process.env.NEXT_PULIC_EQUITIES_PASSWORD
        }
    }

}