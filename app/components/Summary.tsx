interface SumProps {
    params: string;
}

export default function Summary({ params }: SumProps) {
  const safeParseJSON = (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return jsonString;
    }
  };

  const item = safeParseJSON(params)
  console.log(item)
  return (
    <div>
      {item['evaluation']
        ? <div style={{ paddingLeft: "12px" }}>
          <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>Summary</p>
          {item['evaluation']
            ? <p style={{ textDecoration: "underline" }}><b>{item['evaluation']}</b></p>
            : <p style={{textDecoration: "underline"}}><b>{item}</b></p>}

            {item['cause']
            ? <p>{item['cause']}</p>
            : <p>{item}</p>}
          </div>
        : <div></div>}
    </div>
  )
}