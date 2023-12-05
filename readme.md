# OpenAI Express API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is an Express API for calling OpenAI's powerful natural language processing capabilities.

## Getting Started

To start the server, run:
bash
npm start

By default, the server runs on port 3001. You can customize the port by setting the `PORT` environment variable.

## Configuration

You need to provide your OpenAI API key in a `.env` file. Create a file named `.env` in the root of the project and add your API key as follows:
plaintext
API_KEY=your_openai_api_key

You can also customize the port by setting the `PORT` environment variable in the `.env` file.

## Usage

Once the server is running, you can make requests to the API, by default /api/chat, with the message as body.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

