const RESERVED_SUBDOMAINS = [
    // TECHNICAL & INFRASTRUCTURE
    "www", "www1", "www2", "www3", "www4", "www5",
    "mail", "email", "smtp", "pop", "pop3", "imap", "webmail", "roundcube",
    "ftp", "sftp", "ssh", "telnet", "rdp", "vnc",
    "dns", "ns", "ns1", "ns2", "ns3", "ns4", "ns5", "ns6", "ns7", "ns8", "ns9", "ns10",
    "mx", "mx1", "mx2", "mx3", "mx4", "mx5", "spf", "dkim", "dmarc", "autoconfig", "autodiscover",
    "api", "api-v1", "api-v2", "api-v3", "api1", "api2", "api3", "rest", "graphql", "grpc", "soap",
    "cdn", "static", "assets", "media", "files", "storage", "uploads", "download", "downloads", "dl",
    "cache", "redis", "memcache", "memcached", "varnish",
    "proxy", "gateway", "load-balancer", "lb", "balancer",
    "vpn", "ssl", "tls", "certificate", "cert", "certs", "ca",
    "server", "host", "node", "worker", "workers", "cron", "jobs", "queue", "queues",
    "backup", "backups", "restore", "archive", "archives", "dump", "dumps",
    "firewall", "iot", "printer", "camera", "dvr", "nvr", "router", "modem", "broadcast", "multicast",

    // PLATFORM & SERVICE PAGES
    "indevs", "home", "index", "main", "root", "default",
    "about", "about-us", "aboutus", "team", "company",
    "contact", "contact-us", "contactus", "reach", "reachout",
    "help", "support", "helpdesk", "helpcenter", "customer-service", "customer-support",
    "faq", "faqs", "questions", "qa", "qna",
    "docs", "documentation", "guide", "guides", "tutorial", "tutorials", "howto",
    "wiki", "knowledge", "kb", "knowledgebase", "learn", "learning",
    "blog", "news", "updates", "changelog", "changelogs", "releases", "release-notes",
    "status", "health", "uptime", "monitor", "monitoring", "statuspage",
    "legal", "terms", "tos", "terms-of-service", "privacy", "privacy-policy", "policy", "policies", "gdpr",
    "abuse", "dmca", "copyright", "trademark", "ip", "report",
    "careers", "jobs", "hiring", "work", "opportunities",
    "pricing", "plans", "premium", "pro", "enterprise", "business",
    "features", "product", "products", "services", "solutions",
    "partners", "partner", "affiliates", "affiliate", "resellers", "reseller",

    // ADMIN & MANAGEMENT
    "admin", "administrator", "root", "superuser", "sudo", "su",
    "dashboard", "panel", "control", "console", "manage", "management", "manager",
    "cpanel", "whm", "plesk", "webmin", "directadmin",
    "portal", "account", "myaccount", "my-account", "my-profile",
    "settings", "config", "configuration", "preferences", "prefs", "options",
    "system", "sys", "internal", "private", "restricted",
    "secure", "security", "protected", "secret",
    "staff", "team", "moderator", "mod", "mods", "owner", "owners",
    "indevs-team", "indevs-official", "superuser", "sudoer",

    // AUTHENTICATION & SECURITY
    "login", "signin", "sign-in", "signup", "sign-up", "register", "registration",
    "auth", "oauth", "oauth2", "sso", "saml", "openid",
    "authentication", "authorize", "authorization",
    "verify", "verification", "validate", "validation", "confirm", "confirmation",
    "activate", "activation", "deactivate",
    "password", "passwd", "pass", "pwd", "reset", "reset-password", "forgot", "forgot-password", "recovery", "recover",
    "session", "sessions", "token", "tokens", "jwt", "key", "keys", "apikey", "api-key", "secret", "secrets",
    "2fa", "mfa", "otp", "totp", "authenticator",
    "logout", "signout", "sign-out", "logoff",

    // FINANCIAL & PAYMENT
    "pay", "payment", "payments", "checkout", "cart", "shop", "store", "ecommerce",
    "billing", "invoice", "invoices", "receipt", "receipts", "transaction", "transactions",
    "subscription", "subscribe", "subscriptions", "subs",
    "wallet", "balance", "credit", "credits", "debit",
    "refund", "refunds", "chargeback", "dispute",
    "donate", "donation", "donations", "sponsor", "sponsors",
    "bank", "banking", "account-number", "routing", "swift", "iban",
    "paypal", "stripe", "razorpay", "paytm", "googlepay", "phonepe", "amazonpay",
    "visa", "mastercard", "amex", "discover", "rupay",

    // DEVELOPMENT & TESTING
    "dev", "develop", "development", "developer", "developers",
    "test", "testing", "test1", "test2", "test3", "test4", "test5",
    "stage", "staging", "qa", "uat", "pre-prod", "preprod",
    "demo", "sandbox", "preview", "beta", "alpha", "rc", "canary",
    "local", "localhost", "127-0-0-1", "0-0-0-0", "loopback",
    "debug", "debugger", "trace", "profiler",
    "sample", "example", "examples", "placeholder", "dummy", "mock",

    // COMMON SERVICES
    "app", "apps", "application", "applications",
    "service", "services", "microservice", "microservices", "svc",
    "web", "website", "site", "sites", "webpage",
    "mobile", "ios", "android", "flutter", "reactnative",
    "desktop", "electron", "tauri",
    "backend", "frontend", "client", "server-side", "serverside",
    "database", "db", "mysql", "postgres", "postgresql", "mongodb", "mariadb", "sql", "nosql",
    "search", "elasticsearch", "elastic", "solr", "algolia",
    "queue", "rabbitmq", "kafka", "pubsub", "redis-queue",
    "socket", "websocket", "ws", "wss", "socketio",
    "stream", "streaming", "live", "realtime", "rt",

    // ANALYTICS & MONITORING
    "analytics", "stats", "statistics", "metrics", "telemetry", "insights",
    "tracking", "tracker", "track", "pixel", "tag",
    "log", "logs", "logging", "logger", "syslog",
    "sentry", "bugsnag", "rollbar", "airbrake",
    "grafana", "prometheus", "datadog", "newrelic",
    "ga", "google-analytics", "gtm", "tag-manager", "mixpanel", "amplitude",

    // MAJOR TECH BRANDS
    "google", "gmail", "youtube", "android", "chrome", "drive", "docs", "sheets", "slides",
    "apple", "icloud", "iphone", "ipad", "mac", "safari", "appstore",
    "microsoft", "windows", "office", "outlook", "azure", "bing", "edge", "onedrive",
    "amazon", "aws", "prime", "alexa", "kindle", "s3", "ec2", "lambda",
    "meta", "facebook", "instagram", "whatsapp", "messenger", "fb", "ig", "wa",

    // SOCIAL MEDIA
    "twitter", "x", "tweet", "tweets",
    "linkedin", "tiktok", "snapchat", "pinterest", "reddit",
    "discord", "telegram", "slack", "teams", "zoom", "webex",
    "youtube", "vimeo", "dailymotion",
    "medium", "substack", "tumblr", "wordpress",

    // DEVELOPMENT PLATFORMS
    "github", "gitlab", "bitbucket", "git", "svn",
    "vercel", "netlify", "heroku", "railway", "render",
    "cloudflare", "digitalocean", "linode", "vultr", "hetzner",
    "docker", "kubernetes", "k8s", "jenkins", "circleci", "travis",

    // PAYMENT PLATFORMS
    "paypal", "stripe", "square", "venmo", "cashapp", "zelle",
    "razorpay", "paytm", "phonepe", "googlepay", "amazonpay", "bhim",

    // STREAMING & ENTERTAINMENT
    "netflix", "spotify", "disney", "disneyplus", "hulu", "prime-video", "primevideo",
    "twitch", "youtube-tv", "soundcloud", "apple-music", "amazon-music",
    "hotstar", "zee5", "sonyliv", "voot", "aha",

    // GAMING
    "steam", "epic", "epicgames", "origin", "ubisoft", "ea", "blizzard", "battlenet",
    "playstation", "xbox", "nintendo", "switch",
    "roblox", "minecraft", "fortnite", "valorant", "pubg", "cod",

    // AI & TECH
    "openai", "chatgpt", "gpt", "gpt4", "gpt-4",
    "claude", "anthropic", "gemini", "bard",
    "midjourney", "stability", "huggingface", "replicate",

    // OTHER MAJOR BRANDS
    "zoom", "webex", "gotomeeting", "meet", "hangouts",
    "dropbox", "box", "onedrive", "gdrive",
    "adobe", "figma", "canva", "sketch",
    "notion", "airtable", "monday", "asana", "trello", "jira",
    "shopify", "woocommerce", "magento", "bigcommerce",

    // GOVERNMENT & OFFICIAL
    "gov", "govt", "government", "official", "authority", "public",
    "ministry", "department", "dept", "bureau", "agency",
    "police", "law", "enforcement", "crime", "fbi", "cia",
    "court", "judge", "justice", "legal", "judiciary",
    "army", "navy", "airforce", "military", "defense", "mil", "armed-forces",
    "parliament", "congress", "senate", "assembly", "legislature",
    "election", "vote", "voter", "ballot", "evm", "electioncommission",
    "tax", "taxation", "revenue", "irs", "gst", "income-tax", "incometax",
    "passport", "visa", "immigration", "customs", "border",
    "health", "healthcare", "hospital", "medical", "nhs", "who",
    "education", "school", "university", "college", "ugc", "aicte",

    // PHISHING KEYWORDS
    "verify-account", "verify-identity", "account-verification", "identity-verification",
    "suspended", "suspend", "locked", "unlock", "restricted", "blocked",
    "urgent", "action-required", "immediate", "alert", "warning",
    "security-alert", "security-notice", "security-warning",
    "update-payment", "update-billing", "confirm-payment", "payment-failed",
    "claim", "prize", "winner", "reward", "gift", "free", "congratulations",
    "customer-service", "customer-support", "helpline", "callcenter",
    "secure-login", "safe-login", "protected-login", "official-login",

    // SINGLE LETTERS
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    // COMMON DOUBLE LETTERS
    "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am",
    "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az",
    "ba", "bb", "bc", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm",
    "bn", "bo", "bp", "bq", "br", "bs", "bt", "bu", "bv", "bw", "bx", "by", "bz",
    "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ch", "ci", "cj", "ck", "cl", "cm",
    "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz",
    "io", "ml", "ui", "ux", "db", "js", "py", "go", "rs", "ts", "cs", "vb",

    // GENERIC WORDS
    "home", "main", "default", "index", "start",
    "user", "users", "member", "members", "guest", "guests",
    "profile", "profiles", "public", "private",
    "page", "pages", "post", "posts", "article", "articles",
    "feed", "feeds", "rss", "atom", "json", "xml", "csv",
    "data", "info", "information", "details",
    "image", "images", "img", "picture", "pictures", "photo", "photos", "pic", "pics",
    "video", "videos", "vid", "vids", "movie", "movies",
    "audio", "music", "sound", "podcast", "podcasts",
    "document", "documents", "doc", "docs", "file", "files", "attachment", "attachments",
    "link", "links", "url", "redirect", "goto", "short", "shorturl",
    "tag", "tags", "category", "categories", "topic", "topics",
    "forum", "forums", "community", "communities", "discussion",
    "message", "messages", "msg", "chat", "inbox", "outbox",
    "event", "events", "calendar", "schedule",
    "project", "projects", "task", "tasks", "todo", "todos",

    // OFFENSIVE/INAPPROPRIATE
    "admin123", "test123", "demo123", "password", "password123",
    "null", "undefined", "none", "false", "true", "void",
    "fuck", "shit", "damn", "hell", "ass", "bitch", "bastard", "crap",
    "sex", "porn", "xxx", "adult", "nsfw", "nude", "naked",
    "drug", "drugs", "weed", "cocaine", "heroin", "meth",
    "hack", "hacker", "hacking", "crack", "cracking", "exploit",
    "spam", "scam", "fraud", "phish", "phishing", "malware", "virus", "trojan",

    // INDIAN SPECIFIC
    "india", "indian", "bharath", "bharat", "hindustan",
    "pm", "president", "minister", "cm", "mla", "mp",
    "aadhaar", "aadhar", "pan", "gstin", "upi",
    "delhi", "mumbai", "bangalore", "bengaluru", "chennai", "kolkata", "hyderabad", "pune", "ahmedabad",
    "bjp", "congress", "aap", "tmc", "dmk", "aiadmk",
    "irctc", "railway", "railways", "indianrailways",
    "sbi", "hdfc", "icici", "axis", "pnb", "boi", "canara",
    "uidai", "epfo", "esic", "nps",

    // COMMON SUBDOMAINS PATTERNS
    "backup1", "backup2", "beta1", "beta2",
    "staging1", "staging2", "dev1", "dev2",
    "app1", "app2", "web1", "web2",
    "portal1", "portal2", "admin1", "admin2",
    "old", "new", "legacy", "v1", "v2", "v3", "v4", "v5",

    // EMAIL & COMMUNICATION
    "postmaster", "hostmaster", "webmaster", "abuse", "noc", "security",
    "info", "hello", "hi", "contact", "sales", "marketing", "support",
    "noreply", "no-reply", "donotreply", "do-not-reply",

    // CLOUD & HOSTING
    "cloud", "hosting", "host", "vps", "dedicated", "shared",
    "instance", "cluster", "pod", "container",

    // CERTIFICATES & VALIDATION
    "acme", "letsencrypt", "certbot", "well-known",

    // COMMON MISSPELLINGS
    "admim", "adnin", "lgin", "sigin", "singup",
    "emial", "emil", "supprot", "contcat"
];

export const RESERVED_SUBDOMAINS_LIST = RESERVED_SUBDOMAINS; // Export as alias if needed or default
export default RESERVED_SUBDOMAINS; // Default export for array
