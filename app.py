from flask import Flask, render_template, make_response
import random

# Initialize Flask app
app = Flask(__name__)

# route to main page
@app.route('/')
def index():
    # main HTML page is index.html
    return render_template('index.html')

# route to get random fortune
@app.route('/get_fortune')
def get_fortune():
    try:
        # open 'fortunes.txt' file
        with open('fortunes.txt', 'r') as file:
            # read all lines from the file
            fortunes = file.readlines()
            # choose a random fortune and strip any extra whitespace
            fortune = random.choice(fortunes).strip()
        # create a response with the selected fortune
        response = make_response(fortune)
        # set the response content type to plain text
        response.headers['Content-Type'] = 'text/plain'
        return response
    except FileNotFoundError:
        # if the file does not exist
        return "No fortunes available. Please add some to the fortunes.txt file.", 404

# run Flask in dubug mode
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
