function Todoitem2() {
  let todoName1 = "Go to college";
  let todoDate1 = "4/10/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName1}</div>
        <div class="col-4">{todoDate1}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem2;
