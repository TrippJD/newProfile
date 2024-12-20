[Live Demo](https://next-motion-five.vercel.app/)

### 2. Install Dependencies

- Install the necessary dependencies using `pnpm`:

  ```bash
  pnpm install
  ```

### 3. Set Up Environment Variables

- Create a `.env` file in the root directory.

- You only need two environment variables (which will be used for nodemailer):

  - `MY_EMAIL`
  - `APP_PASSWORD`

- This project is using `gmail` for the nodemailer transport service, so you'll want to create an app password [here](https://myaccount.google.com/apppasswords). This allows your application (this portfolio) to send emails using your Gmail account.

### 5. Run the Development Server

- Start the development server:

  ```bash
  pnpm dev
  ```

- Your application should now be running on `http://localhost:3000`.

### A note on deployment

Since our `/api/email` endpoint requires a server to execute the nodemailer functionality, you'll want to deploy your project through a service that supports serverless functions. Personally, I used [Vercel](https://vercel.com/).
