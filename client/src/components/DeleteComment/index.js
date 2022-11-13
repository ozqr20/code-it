import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_COMMENT } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";


function deleteCommentBtn ({ commentId }){
    const navigate = useNavigate;

    const [deleteComment] = useMutation(DELETE_COMMENT, {
        variables: {id: commentId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: QUERY_POSTS }],
    });

    return (
        <div className = 'd-flex mt-5 ms-auto'>
            <button className="btn btn-danger m-2" onClick={deleteComment}>
                <FaTrash className='icon' /> Delete comment
            </button>
        </div>
    );
}

export default deleteCommentBtn;
