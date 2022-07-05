const LoadingTable = ({quantity}) => {

  const imagineLines = (times) => {
    let lines = [];

    for(let i = 0; i < times; i+=1) {
      lines.push(
      <p class="placeholder-glow">
          <span class="placeholder col-12"></span>
      </p>
      )
    }
    return lines;
  };

  return (
    <>{imagineLines(quantity)}</>
  )
}

export default LoadingTable;