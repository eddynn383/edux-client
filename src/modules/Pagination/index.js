import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Select from '../../components/Select'

const Pagination = (props) => {
    const {
        className,
        totalPages = 1,
        currentPage = 1,
        tooltips,
        onChange,
    } = props

    let pattern = null;

    switch (true) {
        case totalPages < 7: pattern = [...new Array(totalPages)].map((_, i) => i + 1);
            break;
        case currentPage < 4: pattern = [1, 2, 3, 4, 5, '...', totalPages];
            break;
        case currentPage > totalPages - 4:
            pattern = [
                1,
                '...',
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
            break;
        default: pattern = [
                1,
                '...',
                currentPage - 1,
                currentPage,
                currentPage + 1,
                '...',
                totalPages,
            ];
    }

    const handleOnChange = (page) => {
        if (onChange && page > 0 && page <= totalPages) {
            onChange(page);
        }
    };

    return (
        <div className="pagination">
            <div className="pagination_left">
                {/* <Select placeholder={pageSizeOptions[0].label} options={pageSizeOptions} 
                    onChange={
                        (value) => {setPageSize(Number(value.value))}
                    } 
                /> */}
            </div>
            <div className="pagination_right">
                <Button size="small" disabled={currentPage === 1} onClick={() => handleOnChange(currentPage - 1)}><Icon value="faChevronLeft"/></Button>
                <ul className="pages">
                    {
                        pattern.map((option, idx) => {
                                if(option && typeof option !== 'number') {
                                    return (
                                        <li className={option === currentPage ? 'selected' : ''} key={idx}>
                                            <Button size="small" onClick={() => handleOnChange(option)}>{option + 1}</Button>
                                        </li>
                                    )
                                } else {
                                    <li className={option === currentPage ? 'selected' : ''} key={idx}>
                                        <Icon value="faEllipsis" />
                                    </li>
                                }
                            }
                        )
                    }
                </ul>
                <Button size="small" disabled={currentPage === totalPages} onClick={() => handleOnChange(currentPage + 1)} ><Icon value="faChevronRight"/></Button>
            </div>
        </div>
    )
}

export default Pagination

