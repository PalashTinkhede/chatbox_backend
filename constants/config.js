const corsOptions = {
  origin: "https://chat-box-frontend-coral.vercel.app",

  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
