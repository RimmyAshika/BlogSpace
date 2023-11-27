import { Container, PostForm } from '../components';

function AddPost() {
    return (
        <div className="py-8 flex text-left">
            <Container>
                <PostForm />
            </Container>
        </div>
    );
}

export default AddPost;
