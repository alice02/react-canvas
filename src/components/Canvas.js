import React from "react";
import {Layer, Rect, Stage, Group} from 'react-konva';

export default class Canvas extends React.Component {
  render() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    return (
      <Stage width={width} height={height}>
        <Layer>
          <Group>
            <Rect
                x={0} y={10} width={50} height={50}
                fill={"red"}
            />
            <Rect
                x={350} y={10} width={50} height={50}
                fill={"red"}
            />
            <Rect
                x={400} y={10} width={50} height={50}
                fill={"red"}
            />
          </Group>
        </Layer>
      </Stage>
    );
  }
}
