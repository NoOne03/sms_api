# sms_api
NOTE: JSON Format<br>
      | S.No.| Input           | Type       | Description          |
      | :--- |    :----        |  :----     |  :----               |
      | 1    | to              | INT(10)    | Caretaker's Number   |
      | 2    | referenceNumber | VARCHAR(4) | For reference Number |
      | 3    | name            | VARCHAR    | Patient's Name       |

### Example
```json
{
  "to": 9123456780,
  "referenceNumber": "OBGY",
  "Name": "Ankit Kushwaha"
}
```
