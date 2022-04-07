import cv2
import numpy as np
import os
import sys
from keras.models import load_model


def predict(input):
    
    # load the srcnn model with weights
    srcnn = load_model('SRCNN_Model2.h5')
    
    # load the degraded and reference images
    degraded = input

    # preprocess the image with modcrop
    degraded = modcrop(degraded, 3)
    
    # convert the image to YCrCb - (srcnn trained on Y channel)
    temp = cv2.cvtColor(degraded, cv2.COLOR_BGR2YCrCb)
    
    # create image slice and normalize  
    Y = np.zeros((1, temp.shape[0], temp.shape[1], 1), dtype=float)
    Y[0, :, :, 0] = temp[:, :, 0].astype(float) / 255
    
    # perform super-resolution with srcnn
    pre = srcnn.predict(Y, batch_size=1)
    
    # post-process output
    pre *= 255
    pre[pre[:] > 255] = 255
    pre[pre[:] < 0] = 0
    pre = pre.astype(np.uint8)
    
    # copy Y channel back to image and convert to BGR
    temp = shave(temp, 6)
    temp[:, :, 0] = pre[0, :, :, 0]
    output = cv2.cvtColor(temp, cv2.COLOR_YCrCb2BGR)
    
    # remove border from reference and degraged image
    
    degraded = shave(degraded.astype(np.uint8), 6)

    result = cv2.cvtColor(output, cv2.COLOR_BGR2RGB)
    
    # return images and scores
    return result


def modcrop(img, scale):
    tmpsz = img.shape
    sz = tmpsz[0:2]
    sz = sz - np.mod(sz, scale)
    img = img[0:sz[0],1:sz[1]]
    return img



def shave(image, border):
    img = image[border: -border, border: -border]
    return img


