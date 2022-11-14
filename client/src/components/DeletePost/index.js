import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'
import { REMOVE_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";


function DeleteCommentBtn ({ postId }){
    const navigate = useNavigate;
    const { _id } = useParams();

    const [deletePost] = useMutation(REMOVE_POST, {
        variables: {id: _id },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: QUERY_POSTS }],
    });

    return (
       
            <Button type="submit" variant="danger" className="text-center">
                <Trash/>{deletePost}
                
            </Button>
     
    );
}

export default DeleteCommentBtn;
