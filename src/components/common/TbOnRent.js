import React from "react"
import MUIDataTable from "mui-datatables"
import { Button } from "@material-ui/core"

class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    this.setState({ data: this.props.data })
  }
  handleClick = e => {
    window.location.href = `/book/${e}`
  }
  fineMoney = e => {
    const date2 = new Date()
    const diffDays = Math.ceil(
      Math.abs(date2.getTime() - e.getTime()) / (1000 * 60 * 60 * 24)
    )
    const fine = diffDays * 2000
    if (date2 > e) {
      return fine
    } else {
      return 0
    }
  }
  render() {
    console.log("sayank", this.state.data)
    const columns = [
      "Transaction ID",
      "Title",
      "Borrow Date",
      "Expired Date",
      "Fine to Day",
      "View"
    ]
    const data = this.props.data
      .filter(item => item.status === 2 && item.datereturnuser === null)
      .map((item, index) => {
        return [
          item.id,
          item.title,
          (item.daterent = new Date(item.daterent).toISOString().split("T")[0]),
          (item.datereturn = new Date(item.datereturn)
            .toISOString()
            .split("T")[0]),
          this.fineMoney(new Date(item.datereturn)),
          <Button
            onClick={() => this.handleClick(item.bookid)}
            size="small"
            variant="contained"
            color="secondary"
          >
            {" "}
            View
          </Button>
        ]
      })
    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "stacked",
      selectableRows: "none"
    }

    return (
      <MUIDataTable
        title={"On Borrowing"}
        data={data}
        columns={columns}
        options={options}
      />
    )
  }
}
export default History
