import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export default function CourseForm(){
  const form = useForm({
    resolver: zodResolver(courseSchema),
  })


  return(
    <div className="flex"></div>
  )
}