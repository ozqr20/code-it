import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_COMMENT } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";


function DeleteCommentBtn ({ commentId }){
    const navigate = useNavigate;
    const { _id } = useParams();

    const [deleteComment] = useMutation(DELETE_COMMENT, {
        variables: {id: _id },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: QUERY_POSTS }],
    });

    return (
        <div>
            <button type="submit" className="btn btn-danger m-2">{deleteComment}
                <FaTrash className='icon' />
            </button>
        </div>
    );
}

export default DeleteCommentBtn;
