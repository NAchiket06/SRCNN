from flask import Flask, redirect, url_for, render_template, request
from static import script
import cv2
import numpy as np
from flask_cors import CORS


app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

if __name__=="__main__":
    print("Starting python flask server")
    app.run(debug=True)