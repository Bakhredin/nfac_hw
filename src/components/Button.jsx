function Button(props) {
  console.log("user: ", props);

  return (
    <button
      className="border border-slate-800"
      onClick={props.handleChangeUser}
    >
      {props.children}
    </button>
  );
}

export default Button;
