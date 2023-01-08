function FooterChild(props) {
  return <div>{props.title}</div>;
}

function FooterNavFunc(props) {
    const fChild = props.children.map((child) => {
        return <FooterChild title={child.title} />
    })
  return (
    <div className="col">
      <div>{props.title}</div>
      <div>{fChild}</div>
    </div>
  );
}

export { FooterNavFunc };
