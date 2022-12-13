import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInfoAction } from '../../redux/actions';
import { Card } from 'react-bootstrap';

function UserInfo(props) {
    const {id} = useParams()
    const user = useSelector(state=>state.usersReducer.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getInfoAction(id))
    },[])

    console.log(user);

    return (
        <div >
          {  user?.map((item)=>{
            return <Card  style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>name: {item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">id: {item.id}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">username: {item.username}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">phone: <Card.Link>{item.phone}</Card.Link> </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">address:</Card.Subtitle>
                <Card.Text>
                    city: {item.address.city} 
                    </Card.Text>
                <Card.Text>
                    street: {item.address.street}
                </Card.Text>
                <Card.Text>
                    suite: {item.address.suite}
                 </Card.Text>
                 <Card.Text>
                    zipcode: {item.address.zipcode}
                 </Card.Text>

                <Card.Subtitle className="mb-2 text-muted">
                    working company: {item.company.name}
                     </Card.Subtitle>
                     <Card.Text>
                    companiesPhrase: "{item.company.catchPhrase}"
                 </Card.Text>
                     <Card.Text>
                    bs: "{item.company.bs}"
                 </Card.Text>
                <br/>
               website: <Card.Link>{item.website}</Card.Link>

        </Card.Body>

        </Card>
          })}
        </div>
    );
}

export default UserInfo;