import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
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
        <div>
            <button type="submit" className="btn btn-danger m-2">{deletePost}
                <FaTrash className='icon' />
            </button>
        </div>
    );
}

export default DeleteCommentBtn;
