from flask import Flask , render_template, request, jsonify
import pickle as pickle
import numpy as np

app = Flask(__name__)


pkl_filename = "pickle_model.pkl"

with open(pkl_filename, 'rb') as file:
    pickle_model = pickle.load(file)

# @app.route('/getmsg/', methods=['GET'])
# def respond():
#     name = request.args.get("name", None)


#     response = {}

#     # Check if user sent a name at all
#     if not name:
#         response["ERROR"] = "no name found, please send a name."
#     # Check if the user entered a number not a name
#     elif str(name).isdigit():
#         response["ERROR"] = "name can't be numeric."
#     # Now the user entered a valid name
#     else:
#         response["MESSAGE"] = f"Welcome {name} to our awesome platform!!"

#     # Return the response in json format
#     return jsonify(response)

@app.route('/')
@app.route('/home')
def home():
    return "<h1>Hello World</h1>"

@app.route('/about')
def about():
    return "<h1>About Page</h1>"


# @app.route('/predict/', methods = [' GET'])
# def predict():
#      data1 = request.args.get("position", None)
#      data2 = request.args.get("day", None)
#      list = [[data1, 10, data2]]
#      arr = np.array(list)
#      prediction = (pickle_model.predict(arr)*20)
#      response = {}
#      response["prediction"] = prediction

#      return jsonify(response)

@app.route('/predict/', methods=['GET'])
def respond():
    data1 = request.args.get("pos", None)
    data = request.args.get("avg", None)
    
    if(data1 and data):
        data1 = int(data1)
        data = int(data)
        data2 = data1 * data
    data3 = request.args.get("day", None)


    response = {}

    # Check if user sent a name at all
    if ((not data1) or (not data2) or (not data3)):
        response["ERROR"] = "please enter position, day and avg time"
    # Check if the user entered a number not a name

    # Now the user entered a valid name
    else:
        list = [[data1, 10, data3]]
        arr = np.array(list)
        prediction = data2+ (pickle_model.predict(arr)*5)
        response["MESSAGE"] = f"{prediction[0]}"

   
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)


    




