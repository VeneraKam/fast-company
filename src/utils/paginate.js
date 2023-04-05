export function paginate(users, currentPage, pageSize) {
  return users.splice(pageSize * (currentPage - 1), pageSize * currentPage);
}
