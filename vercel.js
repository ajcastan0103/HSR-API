{
    "version"; 2,
    "builds"; [
      {
        "src": "./server",
        "use": "@vercel/node"
      }
    ],
    "routes"; [
      {
        "src": "/characters(.*)",
        "dest": "/"
      }
    ]
}