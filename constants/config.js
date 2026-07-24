const corsOptions = {
  origin: "https://victorious-island-0ebdaa200.7.azurestaticapps.net/",

  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
