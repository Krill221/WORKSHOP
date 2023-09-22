from ultralytics import YOLO

def main():
    # model = YOLO('yolov8n-seg.pt')
    # model = YOLO('yolov8n-pose.pt')
    model = YOLO('yolov8n-cls.pt')

    res = model.track(source=0, show=True)

if __name__ == '__main__':
    main()

