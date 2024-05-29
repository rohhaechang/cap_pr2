interface ItemProps {
    params: string;
    name: string;
}

export default function ItemsT({ params, name}: ItemProps) {
  return (
    <div style={{paddingLeft: "12px"}}>
      <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>{name}</p>
      <p>{params}</p>
      </div>
  )
}