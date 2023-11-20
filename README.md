# HSR-API
A fan-made Rest API that gets character info from the game Honkai Star Rail by miHoYo/HoYoverse. </br>
<a href="https://hsr-api.vercel.app/api/v1/characters" target="_blank">Honkai Star Rail API</a> <br />

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Vercel (for deployment)

## API Endpoints

- `GET /api/v1/characters`: Get all characters.
- `GET /api/v1/characters/:id`: Get a character by ID.
- `GET /api/v1/characters/:name`: Get a character by name.

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git

2. Install dependencies:
   ```bash
   npm install express pl node nodemon

3. Set up your local PostgreSQL database and update the connection details in the configuration files.

4. Run the development server:
   ```bash
   npm run dev
   
5. Access the API at http://localhost:3000.

## References
- [HoYoverse Website](https://www.hoyoverse.com/en-us) All characters made from the database are all properties by HoYoverse. This is a non-profit Rest API
- [Honkai Star Rail Fandom Wiki](https://honkai-star-rail.fandom.com/wiki)
  - Used for obtaining image link addresses for the API. 


