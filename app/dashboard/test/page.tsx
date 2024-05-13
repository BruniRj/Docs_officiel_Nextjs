import { Metadata } from "next"
import Test from "./test"
export const metadata: Metadata =  {
    title: "test",
}
const TestPage = () => {
    return(
      
        <Test/>
     
    )
}

export default TestPage