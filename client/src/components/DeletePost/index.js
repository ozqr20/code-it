import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'
import { REMOVE_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";


function DeletePostBtn ({ postId }){
    const navigate = useNavigate;
    const { _id } = useParams();

    const [deletePost] = useMutation(REMOVE_POST, {
        variables: {id: _id },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: QUERY_POSTS }],
    });

     // remove handler
    const removeHandler = async (event) => {
    event.preventDefault();
    try {
        await deletePost({
           variables: {_id},
           
        });
    } catch (e) {
        console.error(e);
    }
  };

    return (
       
            <Button variant="danger" onClick={() => {
                removeHandler();
                alert('DELETE!');
              }}>
                <Trash/>
            </Button>
     
    );
}

export default DeletePostBtn;
