const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <div className='footer'>
      <p><span>©{year}</span> by South Weber First Ward News. This website is maintained by the South Weber First Ward for informational purposes. It is not sponsored or endorsed by the Church of Jesus Christ of Latter-Day Saints or officially represent the Church in any way.</p>
    </div>
  )
}

export default Footer