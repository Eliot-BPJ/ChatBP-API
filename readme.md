# ChatBP Express API

This is an Express API for calling OpenAI powerful natural language processing capabilities.

## Getting Started

To start the server, run: `npm start`

By default, the server runs on port 3000. You can customize the port by setting the `PORT` environment variable.

## Configuration

You need to provide your own OpenAI API key in a `.env` file. Create a `.env` file in the root of the project and add your API key as follows: `API_KEY=your_openai_api_key`

You can also customize the port by setting the `PORT` environment variable in the `.env` file.

## Usage

Once the server is running, you can make requests to the API, by default /api/chat, with the message as body.

## License

