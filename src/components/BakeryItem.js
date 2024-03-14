// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
  const alt = "Image of a " + props.name;
  return (
    <div onClick={() => props.addToCart(props.item)} id="bakeItem">
      <h3>Name: {props.item.name}</h3>
      <p>
        <b>Description:</b> {props.item.description}
      </p>
      <p>
        <b>Price:</b>
        {props.item.price}
      </p>

      <img src={props.item.image} alt={alt}></img>
    </div>
  );
}
