import Pagination from 'react-bootstrap/Pagination';



const BootsPagination = ({total, perPage, paginate}) => {
  const pageNumbers = []
  let active = paginate

  for(let i = 1; i <= Math.ceil(total/perPage);i++){
    pageNumbers.push(
      <Pagination.Item key={i} active={i === active}>
      {i}
    </Pagination.Item>,

    )   
    }
 //console.log(total/perPage)
return (
  <div>
    <Pagination size="md">{pageNumbers}</Pagination>
  </div>
)

}
export default BootsPagination