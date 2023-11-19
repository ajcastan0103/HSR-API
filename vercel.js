{
    "version"; 2,
    "builds"; [
      {
        "src": "./serverjndcaj",
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