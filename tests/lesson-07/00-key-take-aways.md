DOM:
self: chính nó

sibling: anh em - các thẻ cùng parent, ngang cấp với nó3

//

following: các node bên phải của node hiện tại: từ cái thẻ hiện tại đi ra thẻ ancestor tìm con của ancestor phía sau thẻ hiện tại

preceding: các node bên trái của node hiện tại

following-sibling: anh em phía sau

preceding-sibling: anh em phía trước

descendant: con cháu

parent: node trên trực tiếp của node hiện tại

ancestor: tất cả node parent của node hiện tại

- tìm kiếm dựa theo mối quan hệ: [selector]/[relation]::[filter]
- AND: tất cả các điều kiện đều đúng: //element[@condition1 and @condition2]
- Or: 1 trong các điều kiện đúng: //element[@condition1 or @condition2]
- kết hợp and và or: phải có dấu ngoặc gom nhóm điều kiện
- lấy text của element ( tìm text chính xác): //element[text()=”…”]
- tìm element có chứa text, lấy text không chính xác: //element[contains(phần từ muốn tìm, text mà muốn chứa)]
- normalize-space(): chuẩn hóa khoảng trắng, loại bỏ khoảng trắng thừa ở đầu, cuối và giữa text: normalize-space(text)
//element[contains(normalize-space(text), text mà muốn chứa)]