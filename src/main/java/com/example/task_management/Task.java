package com.example.task_management;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "tasks")
@Data
@NoArgsConstructor
public class Task {
    @Id
    private String id;
    private String title;
    private String description;
    private boolean completed;
}
