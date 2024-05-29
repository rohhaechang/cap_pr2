interface SumProps {
    params: string;
}

export default function Summary({ params }: SumProps) {
  const json_data = JSON.parse(params)
  return (
    <div>
      {json_data['evaluation']
        ? <div style={{ paddingLeft: "12px" }}>
            <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>Summary</p>
            <p style={{textDecoration: "underline"}}><b>{json_data['evaluation']}</b></p>
            <p>{json_data['cause']}</p>
          </div>
        : <div></div>}
    </div>
  )
}