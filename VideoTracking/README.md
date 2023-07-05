# create python virtual environment
python3 -m venv venv
# activate it
source venv/bin/activate
# install
pip install ultralytics
pip install supervision

# install lap
pip install cython
git clone https://github.com/gatagat/lap.git
python setup.py build
python setup.py install

# run track video
yolo track model=yolov8n.pt source=0 show=True
# run track image
yolo predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg'