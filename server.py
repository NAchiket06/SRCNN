from flask import Flask, redirect, url_for, render_template, request,Response,flash
import jsonpickle
from static import script
import cv2
import numpy as np
from flask_cors import CORS
import os
import urllib.request



app = Flask(__name__)



@app.route('/',methods = ["POST","GET"])
def home():
    return render_template("index.html")

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
 
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
     

@app.route('/',methods=[])
def upload_image():
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        flash('No image selected for uploading')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = file.filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        #print('upload_image filename: ' + filename)
        flash('Image successfully uploaded and displayed below')
        return render_template('index.html', filename=filename)
    else:
        flash('Allowed image types are - png, jpg, jpeg, gif')
        return redirect(request.url)


if __name__=="__main__":
    print("Starting python flask server")
    app.run(debug=True)