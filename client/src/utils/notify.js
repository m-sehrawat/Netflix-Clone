export const notify = (toast, title, status, description) => {
    return toast({
        title,
        status,
        description,
        duration: 5000,
        isClosable: true,
    });
}