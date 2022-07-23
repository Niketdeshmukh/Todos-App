import {useRouter} from 'next/router'
const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    <>
    <h1>my {pageNumber}</h1>
    </>
  )
}

export default pageNo