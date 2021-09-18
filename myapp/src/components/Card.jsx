function Card({ user }) {
  return (
    <>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card_box'>
          <div className='card_boxImg'>
            <img src={user?.avatar} />
          </div>
          <div className='card_boxBody'>
            <h3>
              {user?.first_name} {user?.last_name}
            </h3>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
